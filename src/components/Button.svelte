<script>
  import Icon from "./Icon.svelte";

  export let icon;
  export let url;
  export let onClick;
</script>

<div class="flex flex-row w-16 justify-center">
  <a
    class="flex h-full w-full text-white"
    href={url}
    
  >
    <Icon class="text-white !w-full h-full" data={icon} />
  </a>
</div>
