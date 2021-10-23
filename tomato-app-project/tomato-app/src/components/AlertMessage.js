const AlertMessage = ({object, action, color}) => {
	return (
		<article className={'alert-message ' + color}>
			<p>{`${object} ${action}`}</p>
		</article>
	)
}

export default AlertMessage