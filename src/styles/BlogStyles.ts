import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = (isDarkMode: boolean) => {
	return makeStyles((theme: Theme) => {
		return {
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
			blogImage: {
				width: '100%',
			},
			postsTitles: {
				color: isDarkMode ? 'white' : 'black',
				textDecoration: 'none',
			},
			postsLink: {
				textDecoration: 'none',
			},
			blogHeaderRow: {
				padding: theme.spacing(3, 0),
			},
			blogHeader: {
				fontSize: '3rem',
			},
			categoryList: {
				cursor: 'pointer',
			},
		};
	});
};
