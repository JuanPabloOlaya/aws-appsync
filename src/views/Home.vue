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
                v-model="text"
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
        <div class="home__row">
          <div class="home__col home--padding">
            <input
              type="text"
              class="home__input"
              v-model="contains"
              placeholder="Type your filter"
            >
          </div>
        </div>
        <div class="home__row">
          <div class="home__col home--padding">
            <pre>{{ messagesList }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
    contains: '',
  }),
  computed: {
    ...mapState('messagesModule', ['messageText', 'messagesList']),
    text: {
      get() {
        return this.messageText;
      },
      set(val) {
        this.updateMessageText(val);
      },
    },
  },
  methods: {
    ...mapActions('messagesModule', ['sendMessage', 'updateMessageText', 'fetchMessages']),
  },
  mounted() {
    this.fetchMessages();
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
  &--padding {
    padding: 16px;
  }
}
</style>
