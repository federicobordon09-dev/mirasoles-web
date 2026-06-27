export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }
}

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
