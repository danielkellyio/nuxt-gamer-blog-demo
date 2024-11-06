<template>
  <div class="space-y-6">
    <div v-for="comment in comments" :key="comment.id" 
      class="bg-gray-800/50 rounded-lg p-4">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <img 
            v-if="comment.avatar" 
            :src="comment.avatar" 
            :alt="comment.author"
            class="w-6 h-6 rounded-full"
          />
          <span class="font-medium text-gaming-secondary">{{ comment.author }}</span>
        </div>
        <RelativeDate :date="comment.createdAt" />
      </div>
      <div class="prose prose-invert prose-sm max-w-none" v-html="comment.content" />
    </div>
    
    <p v-if="comments.length === 0" class="text-gray-400 text-center">
      No comments yet. Be the first to share your thoughts!
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  comments: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>