import apollo from '../../appsync';
import { messages } from '../../graphql';

export default {
  updateMessageText({ commit }, payload) {
    commit('setMessageText', payload);
  },
  updateUserId({ commit }, payload) {
    commit('setUserId', payload);
  },
  updateMessagesList({ commit }, payload) {
    commit('setMessagesList', payload);
  },
  sendMessage({ commit, state }) {
    apollo.defaultClient.mutate({
      mutation: messages.mutations.sendMessage,
      variables: {
        message: state.messageText,
        messageDate: new Date(),
      },
    }).then(() => {
      commit('setMessageText', '');
    }).catch((error) => console.error(error));
  },
  fetchMessages({ dispatch }) {
    apollo.defaultClient.query({
      query: messages.queries.getAllMessages,
      variables: {
        contains: '',
      },
      update(data) {
        dispatch('updateMessagesList', data.listMessageModelTypes);

        return data.listMessageModelTypes;
      },
      subscribeToMore: {
        document: messages.subscriptions.onCreateMesssage,
        updateQuery: (previousResult, { subscriptionData }) => {
          const previousClone = { ...previousResult };
          const subscriptionItem = subscriptionData.data.onCreateMessageModelType;
          const indexMessage = previousClone.listMessageModelTypes.items.indexOf(subscriptionItem);

          previousClone.listMessageModelTypes.items = indexMessage && indexMessage !== -1
            ? (previousClone.listMessageModelTypes.items[indexMessage] = subscriptionItem)
            : previousClone.listMessageModelTypes.items.concat([subscriptionItem]);

          return previousClone;
        },
      },
    }).then((res) => {
      const { items } = res.data.listMessageModelTypes;

      dispatch('updateMessagesList', items);
    });
  },
};
