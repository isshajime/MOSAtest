function BenefitsListItem(props) {
    return <li>{props.benefit}</li>
}

function BenefitsList(props) {
    if (!props.benefits) {
        return <div>Loading...</div>
    }

    if (props.benefits.length === 0) {
        return <div>No benefits listed</div>
    }

    return (
        <ul>
            {props.benefits.map((benefit) => {
                return <BenefitsListItem key={benefit} benefit={benefit} />
            })}
        </ul>
    );
}

function Benefits() {
    const benefits = [
        "Keep track of your cash flows",
        "Save More",
        "Free",
        "Simple"
    ];

    return (
        <div>
            <h2>Benefits of CoinWatcher</h2>
            <BenefitsList benefits={benefits} />
        </div>
    )
}