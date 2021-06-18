import gql from 'graphql-tag';

const getMessage = gql`
  query getMessage($id: ID = "EU37mTTGQ4qQiTTUeSsWi6Dqrq2XLk4u", $messageDate: String = "17-06-2021 07:34:20") {
    getMessageModelType(id: $id, messageDate: $messageDate) {
      id
      message
      messageDate
    }
  }
`;
const getAllMessages = gql`
  query getAllMessages($contains: String = "17/06/2021 10:34:48 p. m.") {
    getAllMessages(filter: { 
      messageDate: {
        contains: $contains,
      }
    }) {
      items {
        id,
        message,
        messageData,
      }
    }
  }
`;

const queries = {
  getMessage,
  getAllMessages,
};
export default queries;
