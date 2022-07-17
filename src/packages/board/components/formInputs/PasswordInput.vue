<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-wrap">
    <label class="w-full" for="password">
      <slot name="label">パスワード</slot>
    </label>
    <input
        id="password"
        type="password"
        class="rounded-md border border-gray-500\/50 w-full p-2"
        autocomplete="password"
        required
        placeholder="*******"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
  <slot name="small"></slot>
</template>
