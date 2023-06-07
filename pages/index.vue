<script setup>
import { useTableStore } from '@/stores/TableStore';
import { ref } from 'vue';

const tableStore = useTableStore();

const title = ref('');
const inputBook = ref('');
const inputData = ref('');
const inputEvent = ref('');
const inputStatus = ref('');

const books = ref(tableStore.books);
const dates = ref(tableStore.events);
const events = ref(tableStore.events);
const statuses = ref(tableStore.statuses);

const addBook = () => {
	let input = inputBook.value;
	let events = dates.value.map((event) => 0);
	console.log(input);
	console.log(`input:${inputBook.value}`, events);
	if (input.length > 0) {
		books.value.push({
			book: input,
			event: events,
			status: '🟡 In progress',
		});
	}

	inputBook.value = '';
};

const deleteTask = (indexToRemove) => {
	books.value.splice(indexToRemove, 1);
};

const addData = () => {
	const date = new Date(inputData.value);
	const options = {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
	};
	const formatter = new Intl.DateTimeFormat('ru-RU', options);

	if (inputData.value.length > 0) {
		dates.value.push(formatter.format(date));
		books.value.map((item) => item.event.push(''));
	}
	inputData.value = '';
};

const addStatus = () => {
	let input = inputStatus.value;

	if (input.length > 0) {
		statuses.value.push('🔵 ' + input);
	}

	inputStatus.value = '';
};

const addEvent = () => {
	let input = inputEvent.value;

	if (input.length > 0) {
		events.value.push('🔶 ' + input);
	}
	inputEvent.value = '';
};
</script>

<template>
	<div class="table-container">
		<div class="table">
			<section class="table__header">
				<input
					class="table__header_input"
					type="text"
					v-model="inputBook" />

				<button
					class="table__header_button"
					@click="addBook">
					📕 Add Book
				</button>
				<input
					class="table__header_input"
					type="date"
					v-model="inputData" />
				<button
					class="table__header_button"
					@click="addData">
					📅 Add Data
				</button>
				<input
					class="table__header_input"
					type="text"
					v-model="inputEvent" />

				<button
					class="table__header_button"
					@click="addEvent">
					🔷 Add Event
				</button>
				<input
					class="table__header_input"
					type="text"
					v-model="inputStatus" />

				<button
					class="table__header_button"
					@click="addStatus">
					⚫ Add Status
				</button>
			</section>
			<section class="table__body">
				<table>
					<thead>
						<tr>
							<th>📚 Books</th>
							<th>🖊️ Author</th>
							<th>🏪 Availability</th>
							<th>🟠 Order</th>
							<th>🔰 Action</th>
							<th>⚫ Status</th>
						</tr>
					</thead>

					<tbody>
						<tr
							v-for="(item, outerIndex) in books"
							:key="outerIndex">
							<th>📕 {{ item.book }}</th>
							<th
								v-for="(date, dataIndex) in dates"
								:key="dataIndex">
								<label>
									<select
										:id="events"
										v-model="
											books[outerIndex].event[dataIndex]
										">
										<option
											v-for="(item, index) in events"
											:key="index"
											:value="item"
											:selected="
												books[outerIndex].event[dataIndex] ===
												item
											">
											🔷
											{{ item }}
										</option>
									</select>
								</label>
							</th>
							<th class="status">
								<label>
									<select
										:id="statuses"
										v-model="books[outerIndex].status">
										<option
											v-for="(item, index) in statuses"
											:key="index"
											:value="item"
											:selected="
												books[outerIndex].status === index
											">
											{{ item }}
										</option>
									</select>
								</label>
								<button
									class="status__delete"
									@click="deleteTask(outerIndex)">
									❌
								</button>
							</th>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.table-container {
	display: flex;
	justify-content: center;
}

.table {
	margin-top: 40px;
	width: 82vw;
	height: 90vh;
	background-color: #fff5;
	backdrop-filter: blur(7px);

	overflow: hidden;

	table,
	th,
	tr {
		padding: 1rem;
		border-collapse: collapse;
		font-weight: 400;
		text-align: left;
	}

	th {
		min-width: 110px;

		select {
			width: 140px;
			height: 35px;
			padding: 4px;
			box-shadow: 2px 2px 8px #999;
			background: #eee;
			border: none;
			outline: none;
			display: inline-block;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			cursor: pointer;
		}
		label {
			position: relative;
		}
		label:after {
			content: '<>';
			font: 11px 'Consolas', monospace;
			color: #666;
			-webkit-transform: rotate(90deg);
			-moz-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			transform: rotate(90deg);
			right: 8px;
			top: 2px;
			padding: 0 0 2px;
			border-bottom: 1px solid #ddd;
			position: absolute;
			pointer-events: none;
		}
		label:before {
			right: 6px;
			top: 0px;
			width: 20px;
			height: 20px;
			background: #eee;
			position: absolute;
			pointer-events: none;
			display: block;
		}
	}

	table {
		width: 100%;
	}

	thead {
		tr {
			background-color: #d5d1defe;
		}
		th {
			z-index: 20;
			position: sticky;
			top: 0;
			left: 0;
			background-color: #d5d1defe;
		}
	}

	tbody {
		tr {
			transition: 0.2s;
		}
		tr:nth-child(even) {
			background-color: #0000000b;
		}
		tr:hover {
			background-color: #fff6;
			transition: 0.3s;
		}
	}

	.table__header {
		width: 100%;
		min-height: 10%;
		background-color: #fff4;
		padding: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;

		.table__header_input {
			width: 160px;
			height: 36px;

			background: oklch(0.88 0.05 237.93);
			padding: 10px;
			display: flex;

			text-align: center;
			cursor: pointer;
			font-weight: 400;
			font-size: 14px;
		}

		.table__header_button {
			width: 107px;
			height: 36px;

			background: #a5d1ef;

			padding: 10px;
			display: flex;

			align-items: center;
		}
	}

	.table__body {
		width: 95%;
		max-height: calc(89% - 0.8rem);
		background-color: #fffb;
		margin: 0.8rem auto;
		border-radius: 0.6rem;
		overflow: auto;

		.table__body_title {
			min-height: 56px;
			padding: 0.9rem 1.2rem;
			display: flex;
			font-size: 20px;
		}
	}
}

.status {
	min-width: 208px !important;
	.status__delete {
		transition: 0.5s;
		margin-left: 1rem;
	}
	.status__delete:hover {
		transition: 0.5s;
		text-shadow: -1px -1px 2px #d32b52, 1px 1px 2px #ff3b70;
	}
}
</style>
