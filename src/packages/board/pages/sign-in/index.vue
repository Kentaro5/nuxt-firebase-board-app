<script setup lang="ts">
import {useSendSignLink, useSignIn} from "~/composables/auth"
import EmailInput from "~/components/formInputs/EmailInput.vue";
import PasswordInput from "~/components/formInputs/PasswordInput.vue";

definePageMeta({
  layout: false,
});

const {email, password, signIn, twitterSignIn} = useSignIn(
    async (user) => {
      navigateTo('/')
    },
    (error) => {
      window.alert(error.message)
    }
);
</script>
<template>
    <div class="flex place-content-center items-center h-screen">
      <div class="sign-in-form shadow-md max-360-none space-y-4 p-8">
        <form class="space-y-4" @submit.prevent="signIn">
          <p class="text-center">ログイン</p>
          <EmailInput v-model="email" />
          <PasswordInput v-model="password"/>
          <button class="bg-gray-800 w-full block text-white rounded-sm px-4 py-2" type="submit">ログイン</button>
        </form>
        <form @submit.prevent="twitterSignIn">
          <button class="bg-blue-400 w-full block text-white rounded-sm px-4 py-2" type="submit">Twitterでログイン</button>
        </form>
          <div class="space-y-0">
            <NuxtLink to="/sign-up" class="text-indigo-400 block">新規登録はこちら</NuxtLink>
            <NuxtLink to="/reset-password" class="text-indigo-400 block">パスワードを忘れた方はこちら</NuxtLink>
          </div>
      </div>
    </div>
</template>
<style lang="css" scoped>
.sign-in-form {
  width: 428px
}
</style>
