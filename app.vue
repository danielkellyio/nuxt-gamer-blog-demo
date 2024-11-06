<template>
  <div class="min-h-screen bg-gaming-dark text-white">
    <header class="border-b border-gaming-primary/20">
      <nav class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="font-orbitron text-2xl font-bold text-gaming-primary">
            Gaming Chronicles
          </NuxtLink>
          <div class="space-x-6">
            <NuxtLink to="/" class="hover:text-gaming-secondary transition">Home</NuxtLink>
            <NuxtLink to="/blog" class="hover:text-gaming-secondary transition">Blog</NuxtLink>
            <NuxtLink to="/reviews" class="hover:text-gaming-secondary transition">Reviews</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <footer class="border-t border-gaming-primary/20 py-6">
      <div class="container mx-auto px-4 text-center text-sm text-gray-400">
        © {{ new Date().getFullYear() }} Gaming Chronicles. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style>
body {
  @apply bg-gaming-dark;
}
</style>