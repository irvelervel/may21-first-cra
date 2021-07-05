const HomeMade = (props) => (
    <div style={{ color: props.color, marginTop: props.topMargin + 'rem' }} className={props.nameOfTheClass}>
        <h1>
            {props.title || props.objectAsAProp.name || 'Default Title'}
        </h1>
        <h2>
            {props.subTitle || 'Default Subtitle'}
        </h2>
    </div>
)

export default HomeMade

// how can you export a piece of code?
// TWO WAYS

// 1) AS DEFAULT
// 2) NOT AS DEFAULT

