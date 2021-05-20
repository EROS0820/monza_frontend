import React, { useState, useEffect } from 'react';
import useStyles from './style';
import useGlobalStyles from 'assets/style/styles';

import { Breadcrumb, ListViewController, PaginationController } from 'components';
import { SortTable } from './components';
import { useToasts } from 'react-toast-notifications';
import measurement_unit from 'apis/measurement_unit';

const MeasureUnit = props => {
	const { children, history } = props;

	const classes = useStyles();
	const global_classes = useGlobalStyles();
	const { addToast } = useToasts()
	const breadcrumb = ['Monitorowanie poziomu zapasów', 'Jednostki miary'];

	const [sortOption, setSortOption] = useState({ sortBy: 0, sortOrder: "asc" });
	const [searchOption, setSearchOption] = useState({name: '', description: '', active: 0});
	const [listInfo, setListInfo] = useState({})
	const [page, setPage] = useState(25);
	const [total, setTotal] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {
		handleSearch();
	}, [sortOption, page]);

	useEffect(() => {
		handleSearch();
		setPage(1);
	}, [searchOption]);

	const handleCreate = () => {
		history.push('/measure_unit/create');
	}

	const handleImport = () => {

	}

	const handleExport = () => {

	}
	

	const requestSort = (pSortBy) => {
		let sortOrder = "asc";
		if (pSortBy === sortOption.sortBy) {
			sortOrder = (sortOption.sortOrder === "asc" ? "desc" : "asc");
		}
		setSortOption({ sortBy: pSortBy, sortOrder: sortOrder })
	}

	const handleDelete = (index) => {
		measurement_unit
			.delete(index)
			.then(response => {
				if (response.code === 401) {
					history.push('/login');
				} else {
					if (response.code === 200) {
						addToast(response.message, { appearance: 'success', autoDismissTimeout: 1000, autoDismiss: true })
					}
					handleSearch();
					setPage(1);
				}
			})
	}

	const handleSearch = () => {
		measurement_unit
			.getListByOption(sortOption, 25, page, searchOption)
			.then(response => {
				if (response.code === 401) {
					history.push('/login');
				} else {
					if (response.code === 200) {
						setData(response.data.list);
						setTotal(response.data.count);
					}
				}
			})
	}

	return (
		<>
			<ListViewController
				CreateTitle="Dodaj nową jednostkę"
				ImportTitle="Dodaj dane z pliku XLS"
				ExportTitle="Eksportuj listę do XLS"
				handleCreate={handleCreate}
				handleImport={handleImport}
				handleExport={handleExport}
			/>
			<Breadcrumb list={breadcrumb} parent_class={global_classes.breadcrumb_class} />
			<SortTable
				rows={data}
				requestSort={requestSort}
				sortOption={sortOption}
				searchOption={searchOption}
				setSearchOption={setSearchOption}
				listInfo={listInfo}
				handleDelete={handleDelete}
			/>
			{
				total !== 0 &&
				<PaginationController total={total} page={page} setPage={setPage} />
			}
		</>
	);
};

export default MeasureUnit;
