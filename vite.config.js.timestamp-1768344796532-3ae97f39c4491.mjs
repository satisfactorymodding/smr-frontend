// vite.config.js
import { sveltekit } from "file:///workspaces/smr_frontend/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import terser from "file:///workspaces/smr_frontend/node_modules/@rollup/plugin-terser/dist/es/index.js";
import { purgeCss } from "file:///workspaces/smr_frontend/node_modules/vite-plugin-tailwind-purgecss/dist/index.js";
var mode = process.env.NODE_ENV || "development";
var dev = mode === "development" || process.env.RUNTIME === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";
var config = {
  plugins: [sveltekit(), purgeCss()],
  server: {
    port: 3e3,
    strictPort: true
  },
  ssr: {
    noExternal: ["custom-protocol-check"]
  },
  optimizeDeps: {
    exclude: ["custom-protocol-check"]
  },
  mode,
  build: {
    sourcemap: true,
    target: ["es2020"],
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("jszip")) {
            return "jszip";
          }
          if (id.includes("zod") || id.includes("felte")) {
            return "forms";
          }
          if (id.includes("marked") || id.includes("prismjs") || id.includes("dompurify") || id.includes("jsdom") || id.includes("@cfworker/json-schema")) {
            return "extras";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      },
      plugins: [
        ...mode !== "development" ? [
          terser({
            format: {
              comments: false
            },
            compress: false
          })
        ] : []
      ]
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9zbXJfZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL3Ntcl9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlcy9zbXJfZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHRlcnNlciBmcm9tICdAcm9sbHVwL3BsdWdpbi10ZXJzZXInO1xuaW1wb3J0IHsgcHVyZ2VDc3MgfSBmcm9tICd2aXRlLXBsdWdpbi10YWlsd2luZC1wdXJnZWNzcyc7XG5cbmNvbnN0IG1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgZGV2ID0gbW9kZSA9PT0gJ2RldmVsb3BtZW50JyB8fCBwcm9jZXNzLmVudi5SVU5USU1FID09PSAnZGV2ZWxvcG1lbnQnO1xucHJvY2Vzcy5lbnYuVEFJTFdJTkRfTU9ERSA9IGRldiA/ICd3YXRjaCcgOiAnYnVpbGQnO1xuXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG5jb25zdCBjb25maWcgPSB7XG4gIHBsdWdpbnM6IFtzdmVsdGVraXQoKSwgcHVyZ2VDc3MoKV0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZVxuICB9LFxuICBzc3I6IHtcbiAgICBub0V4dGVybmFsOiBbJ2N1c3RvbS1wcm90b2NvbC1jaGVjayddXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnY3VzdG9tLXByb3RvY29sLWNoZWNrJ11cbiAgfSxcbiAgbW9kZSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgdGFyZ2V0OiBbJ2VzMjAyMCddLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ2pzemlwJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnanN6aXAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3pvZCcpIHx8IGlkLmluY2x1ZGVzKCdmZWx0ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm1zJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ21hcmtlZCcpIHx8XG4gICAgICAgICAgICBpZC5pbmNsdWRlcygncHJpc21qcycpIHx8XG4gICAgICAgICAgICBpZC5pbmNsdWRlcygnZG9tcHVyaWZ5JykgfHxcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdqc2RvbScpIHx8XG4gICAgICAgICAgICBpZC5pbmNsdWRlcygnQGNmd29ya2VyL2pzb24tc2NoZW1hJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAnZXh0cmFzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgLi4uKG1vZGUgIT09ICdkZXZlbG9wbWVudCdcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgdGVyc2VyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcHJlc3M6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXSlcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFAsU0FBUyxpQkFBaUI7QUFDcFIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsZ0JBQWdCO0FBRXpCLElBQU0sT0FBTyxRQUFRLElBQUksWUFBWTtBQUNyQyxJQUFNLE1BQU0sU0FBUyxpQkFBaUIsUUFBUSxJQUFJLFlBQVk7QUFDOUQsUUFBUSxJQUFJLGdCQUFnQixNQUFNLFVBQVU7QUFHNUMsSUFBTSxTQUFTO0FBQUEsRUFDYixTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUFBLEVBQ2pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxZQUFZLENBQUMsdUJBQXVCO0FBQUEsRUFDdEM7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyx1QkFBdUI7QUFBQSxFQUNuQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLFFBQVEsQ0FBQyxRQUFRO0FBQUEsSUFDakIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsT0FBTyxHQUFHO0FBQ3hCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxTQUFTLEtBQUssS0FBSyxHQUFHLFNBQVMsT0FBTyxHQUFHO0FBQzlDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQ0UsR0FBRyxTQUFTLFFBQVEsS0FDcEIsR0FBRyxTQUFTLFNBQVMsS0FDckIsR0FBRyxTQUFTLFdBQVcsS0FDdkIsR0FBRyxTQUFTLE9BQU8sS0FDbkIsR0FBRyxTQUFTLHVCQUF1QixHQUNuQztBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsR0FBSSxTQUFTLGdCQUNUO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTCxRQUFRO0FBQUEsY0FDTixVQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0EsVUFBVTtBQUFBLFVBQ1osQ0FBQztBQUFBLFFBQ0gsSUFDQSxDQUFDO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
