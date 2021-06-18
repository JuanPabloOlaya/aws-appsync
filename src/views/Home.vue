<template>
  <div>
    <pre>{{getMessageModelType}}</pre>
    <hr>
    <pre>
      {{ listMessageModelTypes }}
    </pre>
  </div>

</template>

<script>
import queries from '@/graphql/queries/Messages';

export default {
  name: 'Home',
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
  mounted() {
    console.log(queries);
  },
};
</script>
