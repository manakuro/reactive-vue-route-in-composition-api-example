<template>
  <div class="container">
    <div>
      <logo />
      <h2 class="subtitle">Reactive Router query: {{ myQuery }}</h2>
      <div class="links">
        <a class="button--grey" @click="handleClick">
          Change Router Query
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'
import useRouter from '~/hooks/useRouter'

export default defineComponent({
  components: {
    Logo
  },

  setup() {
    const { route, router } = useRouter()
    const myQuery = computed(() => route.value.query.myQuery)

    const handleClick = (e: Event) => {
      e.preventDefault()

      router.push({ query: { myQuery: 'handle my query!' } })
    }

    return {
      myQuery,
      handleClick
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
