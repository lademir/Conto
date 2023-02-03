export type CounterProps = {
	title: string;
	count: number;
	goal?: number;
};

export class Counter {
	private constructor(private props: CounterProps & { id: number }) {}

	static create(props: CounterProps & { id: number }) {
		return new Counter(props);
	}

	get title() {
		return this.props.title;
	}

	get id() {
		return this.props.id;
	}

	get count() {
		return this.props.count;
	}

	get goal() {
		return this.props.goal;
	}

	increment() {
		this.props.count++;
	}

	decrement() {
		this.props.count--;
	}

	toJson() {
		return {
			...this.props,
		};
	}
}
