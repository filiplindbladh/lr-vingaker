<template>
  <div id="contact-bubble">
      <button class="circle" @click='openModal()'>
        <i class="fa fa-commenting fa-3x" aria-hidden="true"></i>
      </button>
      <contactModal :activate="addActive" @closeRequest='close'></contactModal>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import contactModal from '@/components/contactModal'

export default {
  name: 'ContactBubble',
  components: {contactModal},
  data: function () {
    return {
      isOpen: false,
      addActive: ''
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    openModal: function () {
      this.addActive = 'is-active'
    },
    close () {
      this.addActive = ''
    }
  }
}
</script>
<style scoped lang="scss">
button:focus {
  outline: none;
}
.circle {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: $green;
  color:white;
  border: 3px solid white;
  cursor: pointer;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(0, 81, 146, .8);
    border-radius: 50%;
    transform: scale(1.08);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .circle:hover > .fa-commenting {
    color: $green;
  }
}
</style>
