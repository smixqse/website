<script>
  export let svgClass;
  export let data;
</script>

<svg
  version="1.1"
  class={svgClass}
  role="presentation"
  fill="currentColor"
  viewBox={`0 0 ${data.icon[0]} ${data.icon[1]}`}
>
  <path key="path-0" d={data.icon[4]} />
</svg>
