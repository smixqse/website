<script>
  import Icon from "./Icon.svelte";
  import { onMount } from "svelte";
  export let button;
  export let rect;
  export let middle;
  export let isRight;

  let icon = button.icon;
  let secondProperty = false;

  onMount(() => {
    setTimeout(() => {
      secondProperty = true;
    }, 50);
  });

  $: animateToMiddle = secondProperty && !middle;
</script>

<span
  class={`fixed transition-all duration-500 delay-300 ease-in-out transform ${
    animateToMiddle && "translate-x-[-50%] translate-y-[-50%]"
  }`}
  style={animateToMiddle
    ? `left: 50%; top: 50%;`
    : `left: ${rect.x}px; top: ${rect.y}px;`}
>
  <div
    class={`w-16 h-16 ${
      animateToMiddle &&
      (isRight
        ? "animate-gotoleft md:animate-gotoright"
        : "animate-gotoright md:animate-gotoleft")
    }`}
  >
    <Icon data={icon} secondary={button.secondary} />
  </div>
</span>
