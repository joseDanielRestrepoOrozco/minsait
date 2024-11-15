function BotonControl({ text, onInteraction, icon, type }) {
    const styleButton = `btn ${type}`
    return (
        <button className={styleButton}
            onClick={onInteraction}
        >
            {icon}
            {text}
        </button>
    );
}

export default BotonControl;
