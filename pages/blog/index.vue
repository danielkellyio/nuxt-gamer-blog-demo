<template>
  <div>
    <h1 class="font-orbitron text-4xl font-bold mb-8 text-gaming-secondary">Latest Articles</h1>
    
    <div class="grid md:grid-cols-2 gap-8">
      <ContentList path="/blog" v-slot="{ list }">
        <article v-for="article in list" :key="article._path" 
          class="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition">
          <NuxtLink :to="article._path" class="block p-6">
            <h2 class="font-orbitron text-xl font-bold mb-2">{{ article.title }}</h2>
            <p class="text-gray-400 mb-4">{{ article.description }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <RelativeDate :date="article.date" />
              <span class="mx-2">•</span>
              <span>{{ article.readingTime }} min read</span>
            </div>
          </NuxtLink>
        </article>
      </ContentList>
    </div>
  </div>
</template>