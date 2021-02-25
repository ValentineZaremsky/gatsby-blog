// gatsby-ssr.js
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  // для разработки оставить inline css
  if (process.env.NODE_ENV !== "production") return

  const headComponents = getHeadComponents()

  headComponents.forEach(el => {
    // для итоговой сборки сделать отдельный css-файл
    if (el.type === "style") {
      el.type = "link"
      el.props["href"] = el.props["data-href"]
      el.props["rel"] = "stylesheet"
      el.props["type"] = "text/css"

      delete el.props["data-href"]
      delete el.props["dangerouslySetInnerHTML"]
    }
  })

  replaceHeadComponents(headComponents)
}
