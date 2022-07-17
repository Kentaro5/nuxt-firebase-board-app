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
    <label class="w-full" for="email">
      <slot name="label">メールアドレス</slot>
    </label>
    <input
        id="email"
        type="email"
        class="rounded-md border border-gray-500\/50 w-full p-2"
        autocomplete="email"
        placeholder="example@example.com"
        required
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
  <slot name="small"></slot>
</template>
