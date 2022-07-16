<script setup lang="ts">
import {useSendSignLink, useSignIn} from "~/composables/auth"
import EmailInput from "~/components/formInputs/EmailInput.vue";
import PasswordInput from "~/components/formInputs/PasswordInput.vue";

const {email, password, signIn} = useSignIn(
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
      <div class="login-form shadow-md max-360-none space-y-4 p-4">
        <form class="space-y-4 p-4" @submit.prevent="signIn">
          <p class="text-center">ログイン</p>
          <EmailInput v-model="email" />
          <PasswordInput v-model="password"/>
          <button class="bg-indigo-400 w-full block text-white rounded-sm px-4 py-2" type="submit">ログイン</button>
          <button class="bg-blue-400 w-full block text-white rounded-sm px-4 py-2" type="submit">Twitterでログイン</button>
          <div class="space-y-0">
            <NuxtLink to="/sign-up" class="text-indigo-400 block">新規登録はこちら</NuxtLink>
            <NuxtLink to="/reset-password" class="text-indigo-400 block">パスワードを忘れた方はこちら</NuxtLink>
          </div>
        </form>
      </div>
    </div>
</template>
<style lang="css" scoped>
.login-form {
  width: 428px
}
</style>
