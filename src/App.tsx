import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: { Navbar, Footer },
  setup() {
    return () => (
      <div>
        <Navbar />
        <RouterView />
        <Footer />
      </div>
    );
  }
});