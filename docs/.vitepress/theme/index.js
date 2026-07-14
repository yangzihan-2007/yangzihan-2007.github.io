import DefaultTheme from 'vitepress/theme'
import ProfileHome from '../components/ProfileHome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProfileHome', ProfileHome)
  },
}
