import foo from 'fake-dependency-1'

export default function MyComponent() {
    window.something = 'ClientSideOnly'
    foo()
    return <span>{window.something}</span>
}
