<template>
  <form @submit.prevent="submitComment" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-1">Name</label>
      <input
        v-model="form.author"
        type="text"
        required
        class="w-full bg-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gaming-primary"
        placeholder="Your name"
      />
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-300 mb-1">Comment</label>
      <RichTextEditor v-model="form.content" />
    </div>

    <button
      type="submit"
      :disabled="isSubmitting || !form.content || !form.author"
      class="bg-gaming-primary hover:bg-gaming-primary/80 text-white px-4 py-2 rounded-md transition disabled:opacity-50"
    >
      {{ isSubmitting ? 'Posting...' : 'Post Comment' }}
    </button>
  </form>
</template>

<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['comment-added'])

const form = reactive({
  author: '',
  content: ''
})

const isSubmitting = ref(false)

async function submitComment() {
  if (isSubmitting.value || !form.content || !form.author) return
  
  isSubmitting.value = true
  try {
    const response = await $fetch(`/api/comments/${props.slug}`, {
      method: 'POST',
      body: {
        content: form.content,
        author: form.author
      }
    })
    
    emit('comment-added', response)
    form.content = ''
    form.author = ''
  } catch (error) {
    console.error('Failed to post comment:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>