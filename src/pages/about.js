// pages/about.js
import React from "react"
import {
  useIntl,
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
} from "gatsby-plugin-intl"
import Layout from "components/layout"

// получить language из контекста и вывести:
// правильно отформатированные дату, число и валюту,
// да просто переменную в тексте... красота!
export default function HomePage({ pageContext: { language } }) {
  const intl = useIntl()

  return (
    <Layout
      lang={language}
      title={intl.formatMessage({ id: "home.title" })}
      description={intl.formatMessage({ id: "home.description" })}
    >
      <p>
        <FormattedDate value={new Date()} /><br />
        <FormattedNumber value={12000} style="currency" currency="USD" /><br />
        <FormattedMessage id="home.h1" values={{ user: "Jack" }} />
      </p>
    </Layout>
  )
}
