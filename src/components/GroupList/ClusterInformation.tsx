import * as React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../stores/StoreProvider';
import { observer, Observer } from 'mobx-react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { ClusterInformationType } from '../../lib/Types';
import { updateClusterInfo } from '../../api/groupService';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  },
  root:{ 
    paddingLeft: theme.spacing(3)
  },
  tableRoot: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    maxWidth: "100%",
    paddingRight: theme.spacing(1)
  },
  selectTableCell: {
    width: 10
  },
  tableCell: {
    width: 100,
    height: 40
  },
  input: {
    width: 130,
    height: 40
  }
}));

const ClusterInformation: React.FC = () => {

  const classes = useStyles();
  const { appStore, uiState } = useStores();
  const rows = appStore.listOfClusters; 
  
  const CustomTableCell = observer(({ row, name, onChange }) => {
    const { isEditMode } = row;
    return (
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={row[name]}
            name={name}
            onChange={e => onChange(e, row)}
            className={classes.input}
          />
        ) : (
          row[name]
        )}
      </TableCell>
    );
  });

  const onToggleEditMode = (id: string) => {
    //find the row and change the toggle edit mode 
    const selectedRow: ClusterInformationType = appStore.listOfClusters?.find(cluster => cluster.id == id);
    selectedRow.isEditMode = !selectedRow.isEditMode; 
  };

  const onChange = (e, row) => {
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    //find the selected row 
    appStore.updateClusterInformation(id, name, value);
  };

  const onConfirmChange = async(id: string) => { 
    onToggleEditMode(id); 
    //find the selected row 
    const selectedCluster = appStore.listOfClusters.find(cluster => cluster.id == id); 
    await updateClusterInfo(selectedCluster.id,selectedCluster.name,selectedCluster.description);
  };

  return (
    <Paper elevation={0}>
      <div className={classes.root}>
        <h1>Groups and Clusters</h1>
        <h4>Students within each group are divided into 5 clusters, based on their demographic information and learning behaviour.</h4>
        <Table className={classes.table}>
          <TableHead style={{backgroundColor: '#FF9933'}}> 
            <TableRow>
              <TableCell align="left" />
              <TableCell align="left"><b>Cluster Name</b></TableCell>
              <TableCell align="left"><b>Cluster Description</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell} align="center">
                  {row.isEditMode ? (
                    <IconButton
                      aria-label="done"
                      onClick={() => onConfirmChange(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                  ) : (
                  <IconButton
                    aria-label="edit"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  )}
              </TableCell>
              <Observer>
                {() => 
                  <>
                    <CustomTableCell {...{ row, name: "name", onChange }} />
                    <CustomTableCell {...{ row, name: "description", onChange }} />
                  </>
                }
             </Observer>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default observer(ClusterInformation);