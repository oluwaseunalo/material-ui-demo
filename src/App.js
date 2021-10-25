import React from 'react'
import {Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core' 
import {PhotoCamera} from '@material-ui/icons';


import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam assumenda cum provident, omnis libero optio sunt hic enim suscipit placeat voluptatum, accusamus necessitatibus, eius ab minus sit laboriosam dignissimos.
                        </Typography>
                    </Container>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Action
                                </Button>
                            </Grid>

                        </Grid>
                    </div>

                </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                   
                {cards.map(()=>(
                    <Grid item key={cards} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia  className={classes.cardMedia} 
                                        image='http://source.unsplash.com/random'
                                        title='Image title'/>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h5'>Heading</Typography>
                                <Typography>Lorem ipsum dolor sit amet.</Typography>
                                        
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>View</Button>
                                <Button size='small' color='primary'>Edit</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}

                    


                </Grid>
            </Container>
            </main>
            <footer className='classes.footer'>
                <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>Lorem ipsum dolor sit amet consectetur, adipis</Typography>
            </footer >
        </>
    )
}

export default App
