import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

export default function Effect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${count} clicks`
  })

  return (
    <Layout>
      <h1>useEffect</h1>
      <p>useEffect lets you perform side effects in function components.</p>
      <p>
        Sometimes, we want to run some additional code after React has updated
        the DOM. Network requests, manual DOM mutations, and logging are common
        examples of this.
      </p>
      <p>
        This hook tells React that your component needs to do something after
        render. React will remember the function you passed (our
        &apos;effect&apos;), and call it later after performing the DOM updates.
        In this effect, we set the document title, but we could also fetch data
        from an API or similar.
      </p>
      <p>
        This runs asyncronously, so it won&apos;t block the DOM loading, but it
        can cause some errors as a result. For instance, if you&apos;re trying
        to update the DOM, and the DOM hasn&apos;t loaded yet, it will throw an
        error.
      </p>
      <p>
        Network requests, manual DOM mutations, and logging are common examples
        of effects that don&apos;t require a cleanup.
      </p>
      <p>
        Previously, this is what <code>componentDidMount</code>,{' '}
        <code>componentDidUpdate</code> and the like were used for. Now, we can
        use useEffect instead.
      </p>
      <p>
        React will remember the function you passed, and call it later after
        performing the DOM updates.
      </p>
      <p>
        It runs both after the first render and after every update, making it
        good for API calls (depending on the contents of the array at the end of
        the useEffect call).
      </p>
      <p>
        This example follows on from the{' '}
        <a href='use-state'>useState example</a>.
      </p>
      <p>
        In addition to the count that useState gave us, we&apos;re now also
        updating the DOM, using useEffect to update the page title in the below
        example.
      </p>
      <p>
        <code>{'useEffect(() => {document.title = `${count} clicks`;});'}</code>
      </p>
      <p>
        Worth bearing in mind that while the examples from above don&apos;t
        require cleanup, some examples do, in order to avoid security issues.
      </p>
      <p>
        An example that would require cleanup is a subscription to an external
        API.
      </p>
      <p>
        If you don't include an array at the end of the useEffect, it will run
        every time you do anything interactive on the page. This is not ideal
        often, as it can cause a lot of unnecessary re-renders. For instance, if
        you're making an API call for the data on your page, it will make that
        API call every time you click a button, or type in an input field, or
        anything else. This can cause a lot of unnecessary API calls, and slow a
        page down.
      </p>
      <p>
        If you include an empty array, it will only run once, on initial page
        load. This is useful for things like setting the page title.
      </p>
      <p>
        If you include something in the array (like a variable), then it will
        run whenever anything listed in the array changes. This is useful for
        things like API calls, where you want to run the API call whenever the
        data changes.
      </p>
      <p>
        Any functions declared inside a useEffect need to be passed through into
        the array, effectively considering it as a &apos;dependancy&apos; of the
        useEffect.
      </p>

      <h2>Example</h2>
      <p>You clicked {count} times! Look at the title in your tab bar, too.</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
    </Layout>
  )
}
