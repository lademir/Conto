type CounterProps = {
	title: string;
	count: number;
	goal?: number;
};

export class Counter {
	private constructor(private props: CounterProps) {}

	static create(props: CounterProps) {
		return new Counter(props);
	}

	get title() {
		return this.props.title;
	}

	get count() {
		return this.props.count;
	}

	get goal() {
		return this.props.goal;
	}
}
