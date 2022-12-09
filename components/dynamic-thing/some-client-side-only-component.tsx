import foo from 'fake-dependency-1'

export default function MyComponent() {
    foo()
    return <span>I shouldn't be shown if JS is disabled</span>
}
