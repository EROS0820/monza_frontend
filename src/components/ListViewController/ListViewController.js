import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import { OutlineButton } from '..';

const useStyles = makeStyles(theme => ({

}));

const ListViewController = props => {
	const { CreateTitle, ImportTitle, ExportTitle, handleCreate, handleImport, handleExport } = props;

	const classes = useStyles();

	return (
		<Grid container spacing={3} justify="space-between">
			<Grid item style={{display: 'flex'}}>
				<div style={{marginRight: '20px'}}>
					<OutlineButton title={CreateTitle} onClick={handleCreate} />
				</div>
				<div>
					<OutlineButton title={ImportTitle} onClick={handleImport} />
				</div>
			</Grid>
			<Grid item>
				<OutlineButton title={ExportTitle} onClick={handleExport} />
			</Grid>
		</Grid>
	);
};

export default ListViewController;