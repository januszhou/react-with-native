import React, { Component } from 'react';
import { connect } from 'shared';
import { Grid, Row, Col } from '@abot/react-higgs/lib/grid';
import { Input } from '@abot/react-higgs/lib/input';
import { Button } from '@abot/react-higgs/lib/button';
import { Typography } from '@abot/react-higgs/lib/typography';

class Faculty extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Typography tag="h1">Faculty</Typography>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Faculty);
