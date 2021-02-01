<style>
  .container {
    display: flex;
    position: relative;
    justify-content: center;
    height: 50px;
  }

  .loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: .5em;
  height: .5em;
  animation: load 1.8s infinite ease-in-out;
}
.loader {
  color: rgb(129, 129, 129);
  font-size: 10px;
  margin: auto auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -1.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 .5em 0 -.3em;
  }
  40% {
    box-shadow: 0 .5em 0 0;
  }
}
</style>

<div class="container">
  <div class="loader">Loading...</div>
</div>