<template>
  <div class="rich-text-editor">
    <div class="flex gap-2 mb-2 border-b border-gray-700 pb-2">
      <button
        v-for="item in toolbarItems"
        :key="item.action"
        @click="item.action"
        :class="[
          'p-2 rounded hover:bg-gray-700 transition',
          { 'bg-gray-700': item.isActive() }
        ]"
        type="button"
      >
        <span class="icon">{{ item.icon }}</span>
      </button>
    </div>
    
    <editor-content 
      :editor="editor" 
      class="prose prose-invert max-w-none min-h-[120px] focus:outline-none"
    />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'text-gaming-secondary hover:text-gaming-secondary/80 transition'
      }
    }),
    Placeholder.configure({
      placeholder: 'Write your comment...'
    })
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-invert max-w-none focus:outline-none'
    }
  },
  onUpdate: () => {
    emit('update:modelValue', editor.value?.getHTML())
  }
})

const toolbarItems = [
  {
    icon: '𝐁',
    action: () => editor.value?.chain().focus().toggleBold().run(),
    isActive: () => editor.value?.isActive('bold') ?? false
  },
  {
    icon: '𝐼',
    action: () => editor.value?.chain().focus().toggleItalic().run(),
    isActive: () => editor.value?.isActive('italic') ?? false
  },
  {
    icon: '🔗',
    action: () => {
      const url = window.prompt('URL:')
      if (url) {
        editor.value?.chain().focus().setLink({ href: url }).run()
      }
    },
    isActive: () => editor.value?.isActive('link') ?? false
  },
  {
    icon: '•',
    action: () => editor.value?.chain().focus().toggleBulletList().run(),
    isActive: () => editor.value?.isActive('bulletList') ?? false
  },
  {
    icon: '1.',
    action: () => editor.value?.chain().focus().toggleOrderedList().run(),
    isActive: () => editor.value?.isActive('orderedList') ?? false
  },
  {
    icon: '❝',
    action: () => editor.value?.chain().focus().toggleBlockquote().run(),
    isActive: () => editor.value?.isActive('blockquote') ?? false
  }
]

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<style>
.rich-text-editor {
  @apply bg-gray-700 rounded-md p-3;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #64748b;
  pointer-events: none;
  height: 0;
}

.ProseMirror {
  @apply min-h-[120px] focus:outline-none;
}
</style>