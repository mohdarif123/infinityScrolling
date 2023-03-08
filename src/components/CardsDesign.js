import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

const CardsDesign = ({ cardDatas }) => {
    return (
        <>
            <Grid container spacing={3}>
                {cardDatas.map((items) => {
                    return (
                        <>
                            <Grid item xl={2} lg={2} md={4} sm={4} xs={4} gap={2} style={{
                                maxWidth: "200px",
                                display: "flex",
                                margin: "auto",
                            }}>
                                <Card sx={{ maxWidth: 345 }} spacing={2}>
                                    <CardActionArea style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" style={{
                                                heigh: "40px", width: "40px", backgroundColor: "black", color: "white", borderRadius: "50%",
                                                display: "flex", justifyContent: "center", alignItems: "center",
                                            }}>
                                                {items.id}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" style={{ color: "blue", fontWeight: "bold" }}>
                                                {items.body.substr(0, 150)}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" style={{ color: "white", background: "blue" }}>
                                            {items.title.substr(0, 15)}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </>
                    );
                })}
            </Grid>
        </>
    )
}
export default CardsDesign;