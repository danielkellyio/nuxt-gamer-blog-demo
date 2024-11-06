<template>
  <div class="space-y-12">
    <section class="text-center space-y-6">
      <h1 class="font-orbitron text-5xl font-bold bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
        Welcome to Gaming Chronicles
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Your destination for the latest gaming news, in-depth reviews, and expert analysis
      </p>
    </section>

    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ContentList path="/blog" v-slot="{ list }">
        <article v-for="article in list.slice(0, 3)" :key="article._path" 
          class="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
          <NuxtLink :to="article._path">
            <img v-if="article.image" :src="article.image" :alt="article.title" 
              class="w-full h-48 object-cover" />
            <div class="p-6">
              <h2 class="font-orbitron text-xl font-bold text-gaming-secondary mb-2">
                {{ article.title }}
              </h2>
              <p class="text-gray-400">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </article>
      </ContentList>
    </section>
  </div>
</template>