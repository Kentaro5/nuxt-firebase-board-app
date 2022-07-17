<script setup lang="ts">
import {useSignOut} from '~/composables/auth'

definePageMeta({
  layout: false,
});

const {signOut} = useSignOut(() => {
  const url = '/sign-in'
  window.location.href = url.toString()
})

await signOut()
</script>
<template>
  <div>
  </div>
</template>
