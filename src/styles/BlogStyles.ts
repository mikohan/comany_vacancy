import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',

			backgroundColor: theme.palette.background.paper,
		},
		listDivider: {
			width: '90%',
		},
		inline: {
			display: 'inline',
		},
	})
);
