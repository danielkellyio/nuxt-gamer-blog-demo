<template>
  <article class="max-w-3xl mx-auto">
    <ContentDoc v-slot="{ doc }">
      <div class="mb-8">
        <h1 class="font-orbitron text-4xl font-bold text-gaming-secondary mb-4">
          {{ doc.title }}
        </h1>
        <div class="flex items-center text-sm text-gray-400 mb-6">
          <RelativeDate :date="doc.date" />
          <span class="mx-2">•</span>
          <span>{{ doc.readingTime }} min read</span>
        </div>
        <img v-if="doc.image" :src="doc.image" :alt="doc.title" class="w-full h-64 object-cover rounded-lg mb-8" />
      </div>

      <div class="prose prose-invert prose-lg max-w-none mb-12">
        <ContentRenderer :value="doc" />
      </div>

      <!-- Comments Section -->
      <div class="border-t border-gray-800 pt-8">
        <h2 class="font-orbitron text-2xl font-bold mb-6">Comments</h2>
        <CommentList :comments="comments" class="mb-8" />
        <CommentForm :slug="doc._path.split('/').pop()" @comment-added="onCommentAdded" />
      </div>
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute()
const slug = computed(() => route.params.slug.toString())

const { data: comments } = await useFetch(`/api/comments/${slug.value}`, {
  lazy: true
})

// Add new comment to the list
const onCommentAdded = (newComment) => {
  comments.value.push(newComment);
}
</script>