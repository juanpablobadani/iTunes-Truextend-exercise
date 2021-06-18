import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    root: {
        display: 'flex',
        margin: '2%'
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
        width: 300,
        height: 180,
      },
      cover: {
        width: '100%',
        height: 220,

      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },

      
}));

export default useStyles;