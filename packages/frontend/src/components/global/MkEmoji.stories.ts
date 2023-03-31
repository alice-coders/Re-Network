/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta } from '@storybook/vue3';
const meta = {
	title: 'components/global/MkEmoji',
	component: MkEmoji,
} satisfies Meta<typeof MkEmoji>;
export default meta;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-duplicates */
import { StoryObj } from '@storybook/vue3';
import MkEmoji from './MkEmoji.vue';
export const Default = {
	render(args) {
		return {
			components: {
				MkEmoji,
			},
			setup() {
				return {
					args,
				};
			},
			computed: {
				props() {
					return {
						...args,
					};
				},
			},
			template: '<MkEmoji v-bind="props" />',
		};
	},
	args: {
		emoji: '❤',
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkEmoji>;
