<script>
  import { fade } from 'svelte/transition';
</script>
<style>
  :root {
    --colour: #9c9c9c;
  }
.container {
  position: relative;
  display: flex;
  justify-content: center;
  height: 50px;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 2px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 2s ease-out infinite;
}

.chevron:first-child {
  animation: move 2s ease-out .7s infinite;
}

.chevron:nth-child(2) {
  animation: move 2s ease-out 1.4s infinite;
}

.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: var(--colour);
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(20px);
  }
  67% {
    opacity: 1;
    transform: translateY(25px);
  }
  100% {
    opacity: 0;
    transform: translateY(38px) scale3d(0.5, 0.5, 0.5);
  }
}
</style>
<div transition:fade class="container">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
</div>