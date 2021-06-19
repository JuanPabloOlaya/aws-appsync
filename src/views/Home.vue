<template>
  <div class="home">
    <div class="home__row">
      <div class="home__col home--mw-50">
        <div class="home__form">
          <div class="home__row">
            <div class="home__col">
              <label for="message" class="home__label">Message</label>
              <textarea
                name="message"
                v-model="message"
                id="message"
                cols="30"
                rows="10"
                class="home__input"
              ></textarea>
            </div>
          </div>
          <div class="home__row">
            <div class="home__col">
              <button class="home__button" @click="sendMessage">Crear</button>
            </div>
          </div>
        </div>
      </div>
      <div class="home__col home--mw-50">
        <pre>{{ listMessageModelTypes }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import queries from '@/graphql/queries/Messages';
import mutations from '@/graphql/mutations/Messages';

export default {
  name: 'Home',
  data: () => ({
    message: '',
  }),
  methods: {
    sendMessage() {
      this.$apollo.mutate({
        mutation: mutations.sendMessage,
        variables: {
          message: this.message,
          messageDate: new Date(),
        },
      }).then((response) => {
        console.log(response);
      }).catch((error) => console.error(error));
    },
  },
  apollo: {
    getMessageModelType: {
      query: queries.getMessage,
      variables: {
        id: 'EU37mTTGQ4qQiTTUeSsWi6Dqrq2XLk4u',
        messageDate: '17-06-2021 07:34:20',
      },
      fetchPolicy: 'cache-and-network',
    },
    listMessageModelTypes: {
      query: queries.getAllMessages,
      variables: {
        contains: '',
      },
      fetchPolicy: 'cache-and-network',
    },
  },
};
</script>
<style lang="scss" scoped>
pre {
  box-sizing: border-box;
}
.home {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
  }
  &__col {
    flex-grow: 1;
  }
  &__label {
    display: block;
  }
  &__input {
    width: 100%;
  }

  &--mw-50 {
    max-width: 50%;
  }
}
</style>
