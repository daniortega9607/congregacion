import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Login from '@/views/Login.vue'


describe('views/Login.vue', () => {
  let wrp;

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrp = shallowMount(Login, { localVue });
    
  });

  it('renders empty user', () => {
    const user = wrp.vm.user
    expect(user.email).toMatch('')
    expect(user.password).toMatch('')
  })

});