<template>
  <Login :name="Holi" :options="{crayoli:'true', clickHandler}"/>
</template>

<script>
import Login from './views/Login'

const Holi = ({props}) => {
  console.log(props)
  return <div onClick={props.options.clickHandler}>Holi Crayoli</div>
}

export default {
  name: 'App',
  components: {
    Login
  },
  methods: {
    clickHandler() {
      console.log(this)
    }
  },
  data () {
    return {
      //
      Holi
    }
  }
}
</script>
