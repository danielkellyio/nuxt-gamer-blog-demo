<template>
  <span class="group relative cursor-help">
    <span>{{ timeAgo }}</span>
    <span class="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-sm px-2 py-1 rounded whitespace-nowrap">
      {{ formattedDate }}
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true
  }
})

const timeAgo = useTimeAgo(props.date)
const formattedDate = computed(() => 
  new Date(props.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
)</script>