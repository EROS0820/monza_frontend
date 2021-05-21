import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Checkbox, FormControlLabel, TextareaAutosize, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { SingleSelect } from 'components';
import OutlineButton from 'components/OutlineButton';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%'
  },
  title: {
    fontWeight: 400,
    fontSize: '0.875em',
    margin: theme.spacing(1.5, 0, 0.5, 0)
  },
  input_box: {
    width: '100%',
    padding: theme.spacing(1)
  },
  check_box: {
    marginTop: theme.spacing(1.5),
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.black
    }
  },
  error: {
    border: '1px solid red'
  }
}));

const FormInput = props => {
  const { name, type, title, value, list, handleChange, error } = props;

  const classes = useStyles();

  const getRemainList = (_value) => {
    let _result = [];
    list.map((item, index) => {
      let count = 0;
      value.map((sub) => {
        if (Number(item.id) === Number(sub) && Number(item.id) != Number(_value))
          count++;
      })
      if (count === 0) {
        _result.push(item);
      }
    })
    return _result;
  }

  const handleAddItem = () => {
    let _value = JSON.parse(JSON.stringify(value));
    if (value.length !== list.length) {
      _value.push(0);
      handleChange(name, _value);
    }
  }

  const handleChangeItem = (index, _value) => {
    let result = JSON.parse(JSON.stringify(value));
    result[index] = _value;
    handleChange(name, result);
  }

  const handleDeleteItem = (index) => {
    let result = JSON.parse(JSON.stringify(value));
    result.splice(index, 1);
    handleChange(name, result);
  }

  const handleCheckRegex = (_name, _value) => {
    var fixedInput = _value.replace(/[A-Za-z!@#$%^&*().ążźćśę€ółńĄĘŚŻŹŃŁÓ]/g, '');
    handleChange(_name, fixedInput);
  }

  return (
    <>
      <div className={classes.main}>
        {
          type !== "check_box" &&
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        }
      </div>
      <div>
        {
          type === 'input' && <input className={classes.input_box} type="text" value={value} onChange={(e) => handleChange(name, e.target.value)} />
        }
        {
          type === 'postal_code' && <input className={clsx({[classes.input_box]: true, [classes.error]: error})} type="text" value={value} onChange={(e) => handleChange(name, e.target.value)} />
        }
        {
          type === 'number' && <input className={classes.input_box} type="text" pattern="" value={value} onChange={(e) => handleCheckRegex(name, e.target.value)} />
        }
        {
          type === 'single' && <SingleSelect value={value} handleChange={(value) => handleChange(name, value)} list={list} />
        }
        {
          type === "check_box" &&
          <FormControlLabel
            className={classes.check_box}
            control={
              <Checkbox
                checked={Number(value) === 1 || value === true}
                onChange={(e) => handleChange && handleChange(name, !value)}
              />
            }
            label={title}
          />
        }
        {
          type === "area" && <TextareaAutosize className={classes.input_box} rows={10} value={value} onChange={(e) => handleChange(name, e.target.value)} />
        }
        {
          type === "several_single" &&
          <React.Fragment>
            <Grid container spacing={2}>
              {value.map((item, index) => (
                <React.Fragment>
                  <Grid item xs={10}>
                    <SingleSelect value={item} handleChange={(_value) => handleChangeItem(index, _value)} list={getRemainList(item)} />
                  </Grid>
                  <Grid item xs={2}>
                    <OutlineButton icon={<DeleteIcon />} onClick={() => handleDeleteItem(index)} />
                  </Grid>
                </React.Fragment>
              ))
              }
            </Grid>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <OutlineButton title="Dodaj kolejny magazyn" onClick={handleAddItem} />
              </Grid>
            </Grid>
          </React.Fragment>
        }
      </div>
    </>
  );
};

export default FormInput;
